import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { useGifs } from "./gifs/hooks/useGifs"

export const GifsApp = () => {
    const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs()

    return (
        <>
            {/* Header */}
            <CustomHeader title="Gifs search" description="search and share the perfect gif" />

            {/* Search */}
            <SearchBar
                placeholder="Search gifs"
                onQuery={handleSearch}
            />

            {/* Previous searches */}
            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClicked}
            />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}
