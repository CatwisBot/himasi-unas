import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/activities/[slug] - Ambil detail kegiatan berdasarkan slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const activity = await prisma.activity.findUnique({
      where: { slug },
      include: {
        registrations: {
          select: {
            id: true,
            fullName: true,
            status: true,
            createdAt: true
          }
        },
        _count: {
          select: { registrations: true }
        }
      }
    })

    if (!activity) {
      return NextResponse.json(
        {
          success: false,
          message: 'Activity not found'
        },
        { status: 404 }
      )
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