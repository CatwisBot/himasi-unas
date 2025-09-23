<?php
/**
 * Test endpoint for HIMASI UNAS FAQ Chatbot
 * File: api/test.php - Bisa diakses via browser
 */

// Set content type
header('Content-Type: application/json');

// Check if this is a test page request
if (!isset($_GET['message']) && $_SERVER['REQUEST_METHOD'] === 'GET') {
    // Show simple test form
    ?>
    <!DOCTYPE html>
    <html>
    <head>
        <title>HIMASI UNAS Chatbot API Test</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .test-form { background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0; }
            input, button { padding: 10px; margin: 5px; border: 1px solid #ddd; border-radius: 4px; }
            button { background: #007cba; color: white; cursor: pointer; }
            button:hover { background: #005a87; }
            .result { background: white; padding: 15px; border-radius: 4px; margin: 10px 0; }
        </style>
    </head>
    <body>
        <h1>🤖 HIMASI UNAS Chatbot API Test</h1>
        <p>Test endpoint untuk memverifikasi bahwa PHP backend berfungsi dengan baik.</p>
        
        <div class="test-form">
            <h3>Quick Test:</h3>
            <input type="text" id="testMessage" placeholder="Ketik pertanyaan..." value="Apa itu HIMASI UNAS?" style="width: 300px;">
            <button onclick="testAPI()">Test API</button>
            <div id="result" class="result" style="display: none;"></div>
        </div>

        <h3>Sample Questions:</h3>
        <ul>
            <li><a href="?message=Apa itu HIMASI UNAS?">Apa itu HIMASI UNAS?</a></li>
            <li><a href="?message=Bagaimana cara bergabung?">Bagaimana cara bergabung?</a></li>
            <li><a href="?message=Apa saja kegiatan HIMASI?">Apa saja kegiatan HIMASI?</a></li>
            <li><a href="?message=Kontak HIMASI">Kontak HIMASI</a></li>
        </ul>

        <script>
        async function testAPI() {
            const message = document.getElementById('testMessage').value;
            const resultDiv = document.getElementById('result');
            
            resultDiv.style.display = 'block';
            resultDiv.innerHTML = '⏳ Loading...';
            
            try {
                const response = await fetch('/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: message })
                });
                
                const data = await response.json();
                resultDiv.innerHTML = `
                    <strong>Status:</strong> ${response.status}<br>
                    <strong>Response:</strong><br>
                    <pre>${JSON.stringify(data, null, 2)}</pre>
                `;
            } catch (error) {
                resultDiv.innerHTML = `<strong style="color: red;">Error:</strong> ${error.message}`;
            }
        }
        </script>
    </body>
    </html>
    <?php
    exit;
}

// Handle GET request with message parameter
if (isset($_GET['message']) && !empty($_GET['message'])) {
    $testMessage = $_GET['message'];
    
    // Make internal POST request to chat.php
    $postData = json_encode(['message' => $testMessage]);
    
    // Simulate POST request
    $_SERVER['REQUEST_METHOD'] = 'POST';
    $GLOBALS['HTTP_RAW_POST_DATA'] = $postData;
    
    // Include the main chat logic
    include 'chat.php';
    exit;
}

// If no message provided in GET request
echo json_encode([
    'error' => 'No message provided',
    'usage' => 'Add ?message=your_question to test the API',
    'example' => '/api/test.php?message=Apa itu HIMASI UNAS?'
]);
?>