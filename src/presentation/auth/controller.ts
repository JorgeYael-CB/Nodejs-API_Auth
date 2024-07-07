import { Request, Response } from "express";



export class AuthController {

  constructor(){}


  login( req:Request, res:Response ){
    const ip = req.ip

    res.json('login')
  }


  register( req:Request, res:Response ){
    res.json('register')
  }


  resetPassword( req:Request, res:Response ){
    res.json('resetPassword')
  }


  forgotPassword( req:Request, res:Response ){
    res.json('forgotPassword')
  }


  verifyEmail( req:Request, res:Response ){
    res.json('verifyEmail')
  }


  updateProfile( req:Request, res:Response ){
    res.json('updateProfile')
  }


  getUsers( req:Request, res:Response ){
    res.json('getUsers')
  }


  getUserById( req:Request, res:Response ){
    res.json('getUserById')
  }


  deleteAccount( req:Request, res:Response ){
    res.json('deleteAccount')
  }


  veirfyToken( req:Request, res:Response ){
    res.json('veirfyToken')
  }


  banUser( req:Request, res:Response ){
    res.json('banUser')
  }



}
