"use server";

import { Topic } from "@prisma/client";
import { z } from "zod";
import { db } from "../db";
import { redirect } from "next/navigation";
import { paths } from "../paths";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?:string[]
  };
}
export async function CreateTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
 
  if(!result.success){
    return{
        errors:result.error.flatten().fieldErrors
    }
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      };
    }
  }
  console.log("runnnnnnnnnnnnnnnnn")
  revalidatePath("/")
  redirect(paths.topicShow(topic.slug))

}
