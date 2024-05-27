const Carousel = ({columns, children}: {columns: number, children: React.ReactNode}) => {
  return (
    <div className={`grid grid-cols-${columns} mt-5 gap-5 pb-10 w-full`}>
      {children}
    </div>
  )
}

export default Carousel
