export interface PersonInter {
  id: string;
  name: string;
  age: number;
  x?: number;
}
//定义接口

//自定义接口
export type PersonList = Array<PersonInter>;
// type PersonList= PersonInter[]
