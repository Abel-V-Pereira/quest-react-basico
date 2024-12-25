
export default function ColorfulUppercaseParagraph({ children, color, textTransform }) {

  return (
    <>
      <p style={{ color: color, textTransform: textTransform }} >
        {children}
      </p>
    </>
  )
}
