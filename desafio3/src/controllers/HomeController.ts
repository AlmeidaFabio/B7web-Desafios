import { Request, Response } from "express";
import { updateTime } from "../helpers/updateTime";
import { getPhrasesFromApi } from "../services/api";

export class HomeController {
    async home(request:Request, response:Response) {
        let name:String = 'Fábio';
        let {clock, greeting} = updateTime()

        let api = await getPhrasesFromApi();

        return response.render('home', {
            clock,
            name,
            greeting: `${greeting}, ${name}`,
            phrase: api.frase,
            author: api.autor
        })
    }
}