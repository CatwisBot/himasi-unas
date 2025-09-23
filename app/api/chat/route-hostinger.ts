import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('🔥 Next.js API route /api/chat called');
    
    const body = await request.json();
    console.log('📝 Request body:', body);
    
    const userMessage = body.message;
    if (!userMessage) {
      return NextResponse.json(
        { error: 'No message provided' },
        { status: 400 }
      );
    }

    // Determine backend URL based on environment
    let backendUrl: string;
    
    if (process.env.NODE_ENV === 'production') {
      // For Hostinger: Use PHP backend
      const host = request.headers.get('host') || 'localhost';
      const protocol = request.headers.get('x-forwarded-proto') || 'https';
      backendUrl = `${protocol}://${host}/api/chat`;
      
      console.log(`🌐 Production mode - PHP backend: ${backendUrl}`);
      
      // Make request to PHP backend
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });
      
      if (!response.ok) {
        throw new Error(`PHP backend error: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('🤖 PHP backend response:', data);
      
      return NextResponse.json(data);
      
    } else {
      // For development: Use local Flask or Netlify Functions
      backendUrl = process.env.BACKEND_URL || 'http://localhost:5000/api/chat';
      
      console.log(`🛠️ Development mode - Backend: ${backendUrl}`);
      
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      console.log('🤖 Backend response:', data);
      
      return NextResponse.json(data);
    }
    
  } catch (error) {
    console.error('💥 API route error:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error',
        answer: '❌ Maaf, chatbot sedang mengalami gangguan. Silakan coba lagi nanti atau hubungi tim support.'
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}