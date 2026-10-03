# CityMotion Cinematic Site

Scroll-driven cinematic landing page built around the supplied aerial city footage.

## Why this version is smoother

- The supplied 24 fps source is converted to 60 fps for the scroll experience.
- The 60 fps MP4 is encoded with every frame independently (intra-frame) so scroll seeking does not depend on long GOP/keyframe intervals.
- The React scrubber snaps to the exact 60 fps frame grid.
- Scroll smoothing is time-based and short enough to feel fluid without creating obvious input lag.
- The hero owns the entire video timeline before the next section begins.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Video

`public/video/city-aerial-60-scroll.mp4` is the browser scroll source.
