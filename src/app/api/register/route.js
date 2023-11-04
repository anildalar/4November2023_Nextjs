//1. Import area


const prisma = new PrismaClient();
//2
export async function POST(request) {
    const res = await request.json();


    //prisma.model.method();


    return Response.json({msg:"Hello",res});
}

