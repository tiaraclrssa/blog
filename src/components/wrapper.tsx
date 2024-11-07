import { ReactNode } from "react";

export default function ({children}: {children: ReactNode}){
    return(
        <div className="p-4 flex flex-wrap justify-between items center mx-auto max-w-[200px]">
          {children}
        </div>
    )
}