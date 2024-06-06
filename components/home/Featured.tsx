import Heading from "./HomePageSectionHeading"
import Title from "./HomePageSectionsTitle"
import Horizontal from "./featured/HorizontalDisplay"
import Vertical from "./featured/VerticalDisplay"
import perfumes from '@/public/assets/perfumes.svg'
import speakers from '@/public/assets/speakers.svg'
import Square from "./featured/SquareDisplay"

const Featured = () => {
  return (
    <div className="align-page mt-20">
      <Title text="Featured"/>
      <Heading title="New Arrival"/>
      <div className="grid grid-cols-4 gap-8">
        <Vertical />
        <Horizontal />
        <Square description="Amazon wireless speakers"
        image={speakers} title="Speakers"/>
        <Square description="GUCCI INTENSE OUD EDP"
        image={perfumes} title="Perfume"/>
      </div>
    </div>
  )
}

export default Featured
