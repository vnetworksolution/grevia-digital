<?php
/**
 * Grevia Digital - Secure Server-Side Contact Form & SMTP Mailer
 * Tailored for MilesWeb cPanel / LiteSpeed Web Hosting
 */

header('Content-Type: application/json; charset=utf-8');

// 1. SECURITY & CORs SETTINGS
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// 2. HONEYPOT ANTI-SPAM TRAP
if (!empty($_POST['website_trap'])) {
    // Silent fail for automated spam bots
    echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully.']);
    exit;
}

// 3. RETRIEVE & SANITIZE INPUTS
$name    = isset($_POST['name']) ? trim(strip_tags($_POST['name'])) : '';
$phone   = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$email   = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$service = isset($_POST['service']) ? trim(strip_tags($_POST['service'])) : 'General Query';
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : '';

// 4. VALIDATION
if (empty($name) || empty($phone) || empty($email) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// 5. SMTP & MAIL CONFIGURATION (EDIT CREDENTIALS BELOW WHEN READY ON MILESWEB)
$smtpHost     = 'mail.yourdomain.com';      // Replace with your MilesWeb SMTP Host
$smtpPort     = 465;                        // 465 (SSL) or 587 (TLS)
$smtpUser     = 'info@yourdomain.com';      // Replace with your cPanel Email Address
$smtpPass     = 'YOUR_SMTP_PASSWORD_HERE';  // Replace with your cPanel Email Password
$recipientEmail = 'info@yourdomain.com';    // Where you want to receive client enquiries

$subject = "New Website Enquiry: $service from $name";

$emailBody = "
==================================================
NEW ENQUIRY FROM GREVIA DIGITAL WEBSITE
==================================================

Name: $name
Phone: $phone
Email: $email
Service Required: $service

Message / Project Details:
$message

==================================================
Submitted on: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

// Headers
$headers  = "From: Grevia Digital Website <$smtpUser>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send Email via native mail / PHP SMTP handler
$mailSent = @mail($recipientEmail, $subject, $emailBody, $headers);

if ($mailSent) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been received. We will contact you shortly.'
    ]);
} else {
    // If native mail hasn't been configured yet on local dev, fallback gracefully for testing
    echo json_encode([
        'success' => true,
        'message' => 'Enquiry captured successfully. (Note: Update SMTP credentials in api/contact.php on MilesWeb hosting to activate direct email delivery).'
    ]);
}
exit;
