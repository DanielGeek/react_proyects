import './mylabel.css';

export interface MyLabelProps {
  /**
   * Is this the message to show in the label
   */
  label: string;
  /**
   * Is this the size of the label
   */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * If you liked all capitalized
   */
  allCaps?: boolean;
  /**
   * basic button colors
   */
  color?: 'primary'|'secondary'|'tertiary'
}

export const MyLabel = ({
    allCaps = false,
    color   = 'primary',
    label   = 'No Label',
    size    = 'normal',
  }: MyLabelProps ) => {
  return (
    <span className={`${ size } text-${ color }`}>
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
