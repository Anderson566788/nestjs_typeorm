import { CreateListingDto } from "./create-listings.dto"
import { CreateTagDto } from "./create-tag.sto"

export class CreateItemDto {
    name: string
    public: boolean
    listing: CreateItemDto
    tags: CreateTagDto[]
}
