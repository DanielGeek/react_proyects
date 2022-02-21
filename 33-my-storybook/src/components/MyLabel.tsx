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
}

export const MyLabel = ( { label = 'No Label', size = 'normal' }: MyLabelProps ) => {
  return (
    <span className={`${ size }`}>
      { label }
    </span>
  )
}
