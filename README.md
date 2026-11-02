# Porch Lumber Viewer

A 3D viewer and flat drawings for the front and rear porch framing: posts, LVL beams, the gable truss and the soffit ceilings, with the size of every piece and what it takes to wrap it.

- **3D:** orbit, pan and walk (W A S D) around each porch. Click a piece to see and edit its dimensions.
- **Drawings:** plan, front elevation and side elevation with dimension lines and a numbered key.
- **Print all / PDF:** every drawing of both porches on its own landscape page, then each porch's key and ChamClad list and a page of ChamClad product notes. Choose *Save as PDF* in the print dialog. `index.html#print` opens straight into it.
- **Lumber list:** wrap boards per piece, totals by board width, soffit areas, a ChamClad panel and trim estimate, and CSV export.

Wraps and soffits are planned in [ChamClad](https://chamclad.com) PVC cladding: ½" exterior panels (12" ripped to each face width) for the wraps, and the 6" ceiling & soffit panel for the soffits. Specs come from ICC-ES ESR-4560 and the ChamClad USA brochure. Confirm them with a dealer before ordering.

All measurements live in [`data.js`](data.js), in inches. Edits made in the app are saved in that browser only; use **Export data.js** in the Lumber list to save them back into this file.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
node serve.js
```

then open http://localhost:5173.
