import { navbarItems } from '@/data/navbar';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(navbarItems)
}