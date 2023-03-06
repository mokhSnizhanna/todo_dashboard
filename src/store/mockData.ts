import { Category, Todo } from './StateInterface'

export const categoriesMock:Category[] = [
  {
    id: "E5zzUTZ5MNq40f38ZkH7yoBdDxDXnPr",
    title: "First Category",
    path: "first_category",
    color: "yellow",
  },
  {
    id: "5dEcK5gjmBaG8a7qC2UmS7AVgHoPLlF",
    title: "Second Category",
    path: "second_category",
    color: "",
  },
  {
    id: "VAohRE3ZuoYB6s0RcnF7D2bwjokNdSp",
    title: "I want to buy",
    path: "i_want_to_buy",
    color: "",
  },
];
export const todosMock:Todo[] =  [
  {
    id: "HEbDII6pjbdmMEPtN4JvQBi6jwf0RYr",
    parentId: null,
    title: "First task",
    done: false,
    status: 0,
    categoryId: "E5zzUTZ5MNq40f38ZkH7yoBdDxDXnPr",
  },
  {
    id: "ak6WYvllZ7ZEQPlzmRrsnSmzUL8Ze6G",
    parentId: null,
    title: "Second task",
    done: false,
    status: 0,
    categoryId: "E5zzUTZ5MNq40f38ZkH7yoBdDxDXnPr",
  },
  {
    id: "q08m2vIhVGLaxXBdWDweG4GCvKtOrjP",
    parentId: "HEbDII6pjbdmMEPtN4JvQBi6jwf0RYr",
    title: "Subtask 1",
    done: false,
    status: 0,
    categoryId: "E5zzUTZ5MNq40f38ZkH7yoBdDxDXnPr",
  },
  {
    id: "JxtJnSBmDE0NDroV6jpopmIIDgpOOr2",
    parentId: "HEbDII6pjbdmMEPtN4JvQBi6jwf0RYr",
    title: "Subtask 2",
    done: false,
    status: 0,
    categoryId: "E5zzUTZ5MNq40f38ZkH7yoBdDxDXnPr",
  },
];