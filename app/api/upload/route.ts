import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file uploaded' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file type. Only JPG, JPEG, PNG allowed' },
        { status: 400 }
      )
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json(
        { success: false, message: 'File too large. Maximum size is 5MB' },
        { status: 400 }
      )
    }

    // For now, just return a placeholder URL
    // In production, upload to cloud storage (Cloudinary, AWS S3, etc)
    const timestamp = Date.now()
    const filename = `instagram-proof-${timestamp}-${file.name}`
    
    // TODO: Implement actual file upload to cloud storage
    const fileUrl = `/uploads/${filename}` // Placeholder URL

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      data: {
        url: fileUrl,
        filename: filename,
        size: file.size,
        type: file.type
      }
    })

  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to upload file' },
      { status: 500 }
    )
  }
}