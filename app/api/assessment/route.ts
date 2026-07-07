import { NextResponse } from "next/server";
import { saveAssessment } from "@/lib/services/assessmentService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await saveAssessment({
      lead: body.lead,
      answers: body.answers,
    });

    return NextResponse.json({
      success: true,
      message: "Assessment saved successfully.",
    });
  } catch (error) {
    console.error("Assessment submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while saving the assessment.",
      },
      { status: 500 }
    );
  }
}