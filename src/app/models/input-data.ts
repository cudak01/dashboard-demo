export class InputData {
  label:string;
  identifier:string;
  mandatory?:boolean=false;
  inputType?:string='text';
  validator?:any='.*';
}
