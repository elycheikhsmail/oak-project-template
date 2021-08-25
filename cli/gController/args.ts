// method
//pathname or relative path

export enum methods{
    get = "get",
    post = "post",
    delete="delete",
    put="put"
}
const methodsArrays = [
    "get",
    "post",
    "delete",
    "update"
]
export {
    methodsArrays
}

export interface IgController{
    appName:string,
    controllerName: string,
    contollerMethod: string,
    controllerUrlPrefix:string

}

const cArg:IgController = {
    appName:"foo",
    controllerName:"add",
    contollerMethod:methods.get,
    controllerUrlPrefix:"/add"
}

export {cArg}