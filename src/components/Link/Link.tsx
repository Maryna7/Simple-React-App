import React from 'react';
type LinkPtops = {
    href?: string; 
    className?: string; 
    children: React.ReactNode
}
const  Link = (
    { 
        href, 
        className, 
        children 
    } : LinkPtops) => {
  return (
    <a className={className} href={href}>{children}</a>
  )
}

export { Link } 