import { PrismaClient } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";

export async function POST (req, res){
      BigInt.prototype.toJSON = function (){
        return this.toString();
      };
//=============for user=============
//insert one

try{
  const prisma = new PrismaClient();

  const result = await prisma.user.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }



//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.user.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/



//=============for post=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.post.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//=============for post_comment=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_comment.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.post_comment.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_comment.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_comment.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.user.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//=============for tag=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.tag.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.tag.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.tag.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.tag.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.tag.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//=============for post_tag=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_tag.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.post_tag.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_tag.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_tag.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_tag.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//=============for post_meta=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_meta.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.post_meta.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_meta.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_meta.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_meta.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//=============for category=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.category.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.category.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.category.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.category.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.category.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//=============for post_category=============
//insert one
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_category.create({
    data:
      {
        firstName:"tasnim",
        middleName:"azad",
        lastName:"manha",
        mobile:"01814868644",
        email:"azads5390@gmail.com",
        passwordHash:"abc123",
        intro: 'bio'
    }
  });

    return NextResponse.json({ status:"success", data:result});
}
catch(error){
    return NextResponse.json({status:"Failed"})
  }
*/


//insert many
/*
try{
    const prisma = new PrismaClient();

    const result = await prisma.post_category.createMany({
      data:[
{firstName:"a k",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"manha",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
{firstName:"marjan",middleName:"azad",lastName:"manha",mobile:"01814868644",email:"azads5390@gmail.com",passwordHash:"abc123",intro: 'bio'},
    ]
    })
  return NextResponse.json({status:"success", data:result})
}

catch(error){
  return NextResponse.json({status:"Failed"})
}
*/

//findMany
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_category.findMany();

return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


//update
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_category.update({
    where:{id:11},
    data:{firstName:"taisir",lastName:"mustakim"}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/

//delete data/row
/*
try{
  const prisma = new PrismaClient();

  const result = await prisma.post_category.delete({
    where:{id:12}
  })
return NextResponse.json({status:"success", data:result})
}

catch(error){
return NextResponse.json({status:"Failed"})
}
*/


}









