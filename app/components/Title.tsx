import React from 'react';
import { cn } from "@/lib/utils"

const Title = ({title}: {title : string}) => {
  return (
       <span className="x sc uc yc bd qd.5 vd.5 ne pe se df">{title}</span>
  )
}

export default Title
