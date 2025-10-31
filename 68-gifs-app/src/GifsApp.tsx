import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['Dragon Ball Z']);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 8)]);
    }

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
            <GifList gifs={mockGifs} />
        </>
    )
}
