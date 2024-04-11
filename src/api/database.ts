import { EsperoDB } from "esperodb";

const dataStructure: any = [
    {
      todos: [
        {
             indexes: [
              { _id: { unique: true } }
            ],
             primaryKey: '_id' },
      ],
    }
  ];
 export const db = new EsperoDB('todolist', dataStructure, 2);