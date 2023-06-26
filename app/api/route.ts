import sendRequest from "@/store/send-request";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (request: NextRequest, response: NextResponse) => {
  //getting data from request Body

  const data = await request.json();

  try {
    const res = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${data.url}`
    );

    const responseData = res.data;

    return new Response(JSON.stringify({ urlinfo: responseData }), {
      status: 200,
      statusText: "Sucess",
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to Fetch", { status: 404 });
  }
};
