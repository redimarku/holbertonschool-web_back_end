-- This file lists all bands with Glam rock style ranked by longevity
SELECT band_name,
       COALESCE(split, 2023) - formed + 1 AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;