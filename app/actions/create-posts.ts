"use server";

import { z } from "zod";

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});
interface CreateFormState{
    errors:{
        title?:string[],
        content?:string[],
        _form?:string[]

    }
}
export async function CreatePosts() {}
