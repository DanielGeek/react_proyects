import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"

export const GifsApp = () => {
    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousTerms.includes(query)) return;

        setPreviousTerms([query, ...previousTerms.slice(0, 8)]);

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);
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
            <GifList gifs={gifs} />
        </>
    )
}
