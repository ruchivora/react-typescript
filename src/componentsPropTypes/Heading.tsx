type HeadingProps = {
  title: string;
}

const Heading = ({title}: HeadingProps) => {
  return (
    <div>Heading component title: {title}</div>
  )
}

export default Heading;