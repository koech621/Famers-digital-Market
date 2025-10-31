import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req :Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(401).json({ message: 'unauthorized'});
        
    }
    const token = authHeader .split(' ')[1];
    if (!token){
        return res.status (401).json({ message : 'unauthorized'});
    }
    try {
        const decode =jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decode;
        next();
    }
    catch (error){
        res.status(401).json({message :'unauthorized'});

    }


}