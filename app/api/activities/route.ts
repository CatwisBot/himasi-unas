import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/activities - Ambil kegiatan utama (hanya 1 kegiatan)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  try {
    // Ambil kegiatan pertama atau yang published
    const activity = await prisma.activity.findFirst({
      where: {
        isPublished: true
      },
      include: {
        _count: {
          select: { registrations: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    if (!activity) {
      return NextResponse.json({
        success: false,
        message: 'No activity found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: activity
    })
  } catch (error) {
    console.error('Error fetching activity:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch activity'
      },
      { status: 500 }
    )
  }
}

// POST /api/activities - Buat kegiatan baru (untuk admin)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      description,
      content,
      image,
      category,
      startDate,
      endDate,
      location,
      maxParticipants,
      registrationDeadline,
      requiresApproval
    } = body

    if (!title || !description || !startDate) {
      return NextResponse.json(
        {
          success: false,
          message: 'Title, description, and startDate are required'
        },
        { status: 400 }
      )
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    const activity = await prisma.activity.create({
      data: {
        title,
        slug,
        description,
        content,
        image,
        category,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        location,
        maxParticipants,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        requiresApproval: requiresApproval || false
      }
    })

    return NextResponse.json({
      success: true,
      data: activity
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating activity:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create activity'
      },
      { status: 500 }
    )
  }
}