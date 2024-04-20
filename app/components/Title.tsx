import React from 'react';
import { cn } from "@/lib/utils"

const Title = ({title, className}: {title : string, className?: string}) => {
  return (
       <span className={cn("x sc uc yc bd qd.5 vd.5 ne pe se df", className)}>{title}</span>
  )
}

export default Title
