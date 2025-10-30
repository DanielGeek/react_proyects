import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Gifs search" description="search and share the perfect gif" />

            {/* Search */}
            <SearchBar placeholder="Search gifs" />

            {/* Previous searches */}
            <PreviousSearches searches={['Goku', 'Dragon Ball Z']} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
