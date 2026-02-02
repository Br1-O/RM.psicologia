import clsx from 'clsx'
import {cloneElement, ReactElement} from "react";

//types for btn style and content
type btnStyle = 'navbar' | 'primary' | 'secondary';
interface btnProps 
{
  children: ReactElement<{className?: string}>;
  type?: btnStyle,
  isActive?: boolean,
  isLoading?: boolean,
  disable?: boolean
}

//styles
const baseStyle = 'w-full sm:max-w-[80dvh] lg:max-w-[70dvh] h-auto rounded-3xl text-xl opacity-90 px-5 py-1 text-center'
const styles: Record<btnStyle, string> = {
  navbar: 'bg-pink-500',
  primary: 'bg-[var(--primary)] text-white',
  secondary: 'bg-[var(--secondary)] text-[var(--primary)]',
}

//component for styled Badge
const Badge = ({children, type = 'primary'}: btnProps) => {

    return cloneElement(children,
        {className: clsx(baseStyle, styles[type], children.props.className)}
    )
}

export default Badge