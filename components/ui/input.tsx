import * as React from "react"
import { PiEyeClosedBold } from 'react-icons/pi';
import { AiFillEye } from 'react-icons/ai';
import { MdEdit } from "react-icons/md";

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    edit?: 'user' | 'guest';
    id?: string;
  }
  
  // type HTMLInput<HTMLInputElement, InputProps>
  
  const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, edit, id, ...props }, ref) => {
      const [showPassword, setshowPassword] = React.useState(false);
      
      const togglePasswordVisibility = () => {
        setshowPassword(!showPassword);
      }
    const [inEdit, setInEdit] = React.useState(false);

    const inputType = type === 'password' && showPassword ? 'text' : type

    if (type === 'password') {
      return (
        <div className="flex flex-row">
          <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-white autofill:bg-[#1d1d1d]",
              className
            )}
            ref={ref}
            {...props}
            autoComplete="on"
          />
          {type === 'password' && (
            <button type="button" onClick={togglePasswordVisibility} className='w-[40px] text-white bg-[#000000] p-3 rounded-r-md hover:bg-[#827f7f]'>
              {showPassword ? (
                <AiFillEye />
              ) : (
                <PiEyeClosedBold />
              )}
            </button>
          )}
        </div>
      )
    }
    if (edit === 'user') {
      const handleClick = () => {
        const element = document.getElementById(id as string) as HTMLInputElement;
        // console.log("element: ", element)
        if (element) {
          setInEdit(!inEdit);
          if (!inEdit) {
            element.disabled = false;
            element?.focus();
          }
          if (inEdit) {
            element?.blur();
            element.disabled = true;
          }

        }
      }
      return (
        <div className="relative selection:border-2">
          <input
            type={inputType}
            className={cn(
              `flex min-h-10 h-auto w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-white autofill:bg-[#1d1d1d] border-red-300`,
              className
            )}
            id={id}
            ref={ref}
            disabled={!inEdit}
            {...props}
          />
          <button type='button' className={`absolute right-[0px] top-[0px] text-gray-400 rounded-e-md w-[2.5rem] h-[2.5rem] py-[10px] pl-[14px] custom-edit ${ inEdit && 'md:custom-edit-persist-bg' }`} onClick={handleClick}>
              <MdEdit />
          </button>
        </div>
      )
    }
    else if (edit == 'guest') {
      return (
        <input
            type={inputType}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-default disabled:opacity-50 text-white autofill:bg-[#1d1d1d]",
              className
            )}
            ref={ref}
            {...props}
            disabled
          />
      )
    }
    return (

    // removed_classes="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        <input
          type={inputType}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-white autofill:bg-[#1d1d1d]",
            className
          )}
          ref={ref}
          {...props}
        />

    )
  }
)
Input.displayName = "Input"

export { Input }
