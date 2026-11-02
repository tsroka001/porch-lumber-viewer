/*
 * Porch lumber data.
 *
 * Units: inches.  Coordinate system (per scene):
 *   x = along the house wall, left -> right as you face the house
 *   y = up from the top of the porch slab
 *   z = out from the house wall toward the yard (wall face is z = 0)
 *
 * Each member is a straight piece of lumber running from `start` to `end`
 * (the centerline). `width` is the horizontal thickness, `depth` is the
 * vertical (or in-plane) height of the cross-section. Posts: width is along x,
 * depth is along z.
 *
 * Every number below is an ESTIMATE read off the photos. Replace them with
 * real tape-measure values (in the app's editor or right here) and tick
 * "verified" as you go. The app saves edits in the browser; use
 * "Export data.js" to write them back to this file.
 */
window.PORCH_DEFAULTS = {
  "version": 14,
  "wrapThickness": 0.75,
  "scenes": {
    "front": {
      "title": "Front porch",
      "photos": [
        "photos/front-gable.jpg",
        "photos/front-under-vault.webp",
        "photos/front-shed-extension.jpg",
        "photos/front-under-gable.jpg",
        "photos/front-truss-detail.jpg"
      ],
      "members": [
        {
          "id": "f-post-1",
          "name": "Post 1 (gable left, by brick)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            -8,
            0,
            78
          ],
          "end": [
            -8,
            107,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "In front of the brick wing corner. Size/height measured; position from plan"
        },
        {
          "id": "f-post-2",
          "name": "Post 2 (gable right, front)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            135.5,
            0,
            78
          ],
          "end": [
            135.5,
            107,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured; position from plan"
        },
        {
          "id": "f-post-3",
          "name": "Post 3 (shed start, behind post 2)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            135.5,
            0,
            61.5
          ],
          "end": [
            135.5,
            107,
            61.5
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured; position from plan"
        },
        {
          "id": "f-post-4",
          "name": "Post 4 (shed middle)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            241.5,
            0,
            61.5
          ],
          "end": [
            241.5,
            107,
            61.5
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured. Position from plan view - verify"
        },
        {
          "id": "f-post-5",
          "name": "Post 5 (shed end, at wall)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            354.75,
            0,
            61.5
          ],
          "end": [
            354.75,
            107,
            61.5
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Against the right-hand wall. Size/height measured; position from plan"
        },
        {
          "id": "f-beam-gable",
          "name": "Gable front beam (LVL)",
          "type": "beam",
          "width": 5.5,
          "depth": 9.5,
          "start": [
            -10.75,
            111.75,
            78
          ],
          "end": [
            138.25,
            111.75,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "3-ply LVL, 5-1/2\" x 9-1/2\", 149\" long (measured). Wrapped on all 4 sides"
        },
        {
          "id": "f-beam-return-l",
          "name": "Left return LVL (beam to brick wall)",
          "type": "beam",
          "width": 5.5,
          "depth": 9.5,
          "start": [
            -8,
            111.75,
            75.25
          ],
          "end": [
            -8,
            111.75,
            69.25
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "3-ply LVL, 5-1/2\" x 9-1/2\", 6\" from the back of the gable beam to the brick wing (measured)"
        },
        {
          "id": "f-beam-jog",
          "name": "Jog beam (post 2 to post 3)",
          "type": "beam",
          "width": 5.5,
          "depth": 9.5,
          "start": [
            135.5,
            111.75,
            75.25
          ],
          "end": [
            135.5,
            111.75,
            64.25
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "3-ply LVL, 5-1/2\" x 9-1/2\", 11\" between the gable and shed beams (measured)"
        },
        {
          "id": "f-beam-shed",
          "name": "Shed porch beam (LVL)",
          "type": "beam",
          "width": 5.5,
          "depth": 9.5,
          "start": [
            132.75,
            111.75,
            61.5
          ],
          "end": [
            362.75,
            111.75,
            61.5
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "3-ply LVL, 5-1/2\" x 9-1/2\", 230\" long (measured)"
        },
        {
          "id": "f-truss-stub-l",
          "name": "Truss short post L",
          "type": "other",
          "width": 3.5,
          "depth": 5.5,
          "start": [
            -8.631,
            116.5,
            78
          ],
          "end": [
            -8.631,
            127.5,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Short post under the truss chord heel. 11\" tall, 3-1/2\" side to side x 5-1/2\" front to back (measured)"
        },
        {
          "id": "f-truss-stub-r",
          "name": "Truss short post R",
          "type": "other",
          "width": 3.5,
          "depth": 5.5,
          "start": [
            136.131,
            116.5,
            78
          ],
          "end": [
            136.131,
            127.5,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Short post under the truss chord heel. 11\" tall, 3-1/2\" side to side x 5-1/2\" front to back (measured)"
        },
        {
          "id": "f-truss-chord-l",
          "name": "Truss top chord L",
          "type": "timber",
          "width": 5.5,
          "depth": 3.5,
          "start": [
            -8.631,
            127.5,
            78
          ],
          "end": [
            63.75,
            196.5,
            78
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "Truss timber, to be wrapped. 100\" long, 5-1/2\" front to back x 3-1/2\" (measured)"
        },
        {
          "id": "f-truss-chord-r",
          "name": "Truss top chord R",
          "type": "timber",
          "width": 5.5,
          "depth": 3.5,
          "start": [
            136.131,
            127.5,
            78
          ],
          "end": [
            63.75,
            196.5,
            78
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "Truss timber, to be wrapped. 100\" long, 5-1/2\" front to back x 3-1/2\" (measured)"
        },
        {
          "id": "f-truss-king",
          "name": "Truss king post",
          "type": "timber",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            63.75,
            116.5,
            78
          ],
          "end": [
            63.75,
            196.5,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Truss timber, to be wrapped. 80\" tall, 5-1/2 x 5-1/2 (measured)"
        },
        {
          "id": "f-truss-brace-l",
          "name": "Truss brace L",
          "type": "timber",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            63.75,
            119.154,
            78
          ],
          "end": [
            24.152,
            158.752,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Truss timber, to be wrapped. 56\" long, 5-1/2 x 5-1/2 (measured). Angle assumed 45 deg"
        },
        {
          "id": "f-truss-brace-r",
          "name": "Truss brace R",
          "type": "timber",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            63.75,
            119.154,
            78
          ],
          "end": [
            103.348,
            158.752,
            78
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Truss timber, to be wrapped. 56\" long, 5-1/2 x 5-1/2 (measured). Angle assumed 45 deg"
        }
      ],
      "context": [
        {
          "type": "box",
          "label": "House wall",
          "min": [
            -200,
            0,
            -8
          ],
          "max": [
            410.75,
            240,
            0
          ],
          "color": "#e9e7e2"
        },
        {
          "type": "box",
          "label": "Brick wing",
          "min": [
            -200,
            0,
            -8
          ],
          "max": [
            0,
            250,
            69.25
          ],
          "color": "#d9ccb4"
        },
        {
          "type": "box",
          "label": "Right wall",
          "min": [
            362.75,
            0,
            -8
          ],
          "max": [
            410.75,
            200,
            80
          ],
          "color": "#e9e7e2"
        },
        {
          "type": "box",
          "label": "Entry door",
          "min": [
            15.75,
            0,
            0
          ],
          "max": [
            111.75,
            96,
            0.75
          ],
          "color": "#9a6b3c"
        },
        {
          "type": "box",
          "label": "Slab (gable)",
          "min": [
            -20,
            -8,
            0
          ],
          "max": [
            135.5,
            0,
            81
          ],
          "color": "#b9b6ae"
        },
        {
          "type": "box",
          "label": "Slab (shed)",
          "min": [
            135.5,
            -8,
            0
          ],
          "max": [
            362.75,
            0,
            71
          ],
          "color": "#b9b6ae"
        },
        {
          "type": "box",
          "label": "Steps",
          "min": [
            20,
            -8,
            81
          ],
          "max": [
            114.5,
            -4,
            104
          ],
          "color": "#b9b6ae"
        },
        {
          "type": "quad",
          "label": "Gable roof L",
          "pts": [
            [
              -14.631,
              129.78,
              0
            ],
            [
              -14.631,
              129.78,
              92
            ],
            [
              63.75,
              204.5,
              92
            ],
            [
              63.75,
              204.5,
              0
            ]
          ],
          "color": "#6f6a64"
        },
        {
          "type": "quad",
          "label": "Gable roof R",
          "pts": [
            [
              63.75,
              204.5,
              0
            ],
            [
              63.75,
              204.5,
              92
            ],
            [
              142.131,
              129.78,
              92
            ],
            [
              142.131,
              129.78,
              0
            ]
          ],
          "color": "#6f6a64"
        },
        {
          "type": "quad",
          "label": "Shed roof",
          "pts": [
            [
              132.75,
              116.625,
              74
            ],
            [
              362.75,
              116.625,
              74
            ],
            [
              362.75,
              150.625,
              0
            ],
            [
              132.75,
              150.625,
              0
            ]
          ],
          "color": "#6f6a64"
        }
      ],
      "soffits": [
        {
          "id": "f-soffit-gable",
          "name": "Gable porch ceiling",
          "kind": "gable",
          "x0": -8.631,
          "z0": 0,
          "width": 144.762,
          "depth": 75.25,
          "y": 127.5,
          "pitch": 11.439,
          "verified": false,
          "notes": "Vaulted (confirmed). Heel to heel under the truss (16/12), wall to back of gable beam. Verify width, slope and depth"
        },
        {
          "id": "f-soffit-shed",
          "name": "Shed porch ceiling",
          "kind": "flat",
          "x0": 138.25,
          "z0": 0,
          "width": 224.5,
          "depth": 58.75,
          "y": 116.5,
          "pitch": 0,
          "verified": false,
          "notes": "Flat, gable beam end to right wall, wall to back of shed beam. Verify depth and height"
        }
      ]
    },
    "rear": {
      "title": "Rear porch",
      "photos": [
        "photos/rear-porch.jpg"
      ],
      "members": [
        {
          "id": "r-post-1",
          "name": "Rear post 1 (left)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            114,
            0,
            120
          ],
          "end": [
            114,
            107,
            120
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured. Evenly spaced: 4 bays of 9' 6\" across the 38' porch"
        },
        {
          "id": "r-post-2",
          "name": "Rear post 2 (middle)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            228,
            0,
            120
          ],
          "end": [
            228,
            107,
            120
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured. Evenly spaced: 4 bays of 9' 6\" across the 38' porch"
        },
        {
          "id": "r-post-3",
          "name": "Rear post 3 (right)",
          "type": "post",
          "width": 5.5,
          "depth": 5.5,
          "start": [
            342,
            0,
            120
          ],
          "end": [
            342,
            107,
            120
          ],
          "wrap": true,
          "faces": 4,
          "verified": true,
          "notes": "Size/height measured. Evenly spaced: 4 bays of 9' 6\" across the 38' porch"
        },
        {
          "id": "r-beam",
          "name": "Rear porch beam (LVL)",
          "type": "beam",
          "width": 5.5,
          "depth": 9,
          "start": [
            0,
            111.5,
            120
          ],
          "end": [
            456,
            111.5,
            120
          ],
          "wrap": true,
          "faces": 3,
          "verified": true,
          "notes": "3-ply LVL, 5-1/2\" x 9\" (measured). 38' wall to wall."
        }
      ],
      "context": [
        {
          "type": "box",
          "label": "House wall",
          "min": [
            -40,
            0,
            -6
          ],
          "max": [
            496,
            150,
            0
          ],
          "color": "#e9e7e2"
        },
        {
          "type": "box",
          "label": "Left wall return",
          "min": [
            -12,
            0,
            0
          ],
          "max": [
            0,
            150,
            128
          ],
          "color": "#e9e7e2"
        },
        {
          "type": "box",
          "label": "Right wall return",
          "min": [
            456,
            0,
            0
          ],
          "max": [
            468,
            150,
            128
          ],
          "color": "#e9e7e2"
        },
        {
          "type": "box",
          "label": "Slab",
          "min": [
            -12,
            -8,
            0
          ],
          "max": [
            468,
            0,
            132
          ],
          "color": "#b9b6ae"
        },
        {
          "type": "joists",
          "label": "Ceiling joists",
          "x0": 0,
          "x1": 456,
          "spacing": 16,
          "y": 110.5,
          "size": [
            1.5,
            5.5
          ],
          "z0": 0,
          "z1": 118.25,
          "color": "#d8b07a"
        },
        {
          "type": "quad",
          "label": "Shed roof",
          "pts": [
            [
              -12,
              120.125,
              136
            ],
            [
              468,
              120.125,
              136
            ],
            [
              468,
              154.125,
              0
            ],
            [
              -12,
              154.125,
              0
            ]
          ],
          "color": "#6f6a64"
        }
      ],
      "soffits": [
        {
          "id": "r-soffit",
          "name": "Rear porch ceiling",
          "kind": "flat",
          "x0": 0,
          "z0": 0,
          "width": 456,
          "depth": 117.25,
          "y": 110.5,
          "pitch": 0,
          "verified": false,
          "notes": "Flat, under the ceiling joists, wall to back of beam. Depth estimated from photo - verify"
        }
      ]
    }
  }
};
