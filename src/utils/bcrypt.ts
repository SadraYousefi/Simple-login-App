import * as bcrypt from 'bcrypt';


export async function hash(data: string): Promise<string> {

    const salt = +process.env.HASH_SALT ;
    const hashedPhrase = await bcrypt.hash(data , salt ); 
    return hashedPhrase ;

}

export async function compareHash(data: string , hashedData: string): Promise<boolean>{

    const isMatch = await bcrypt.compare(data , hashedData)
    return isMatch ;

}