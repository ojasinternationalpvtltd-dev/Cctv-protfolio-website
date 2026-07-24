import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM clients');
    return NextResponse.json(rows);
  } catch (error: any) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();
    await pool.query(
      'INSERT INTO clients (name, email, phone) VALUES (?, ?, ?)',
      [name, email, phone]
    );
    return NextResponse.json({ message: 'Client saved!' });
  } catch (error: any) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}