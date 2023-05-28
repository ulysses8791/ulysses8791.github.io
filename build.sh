#!/bin/bash
pandoc -s --metadata pagetitle="Mathieu Stiénon" -c GitHub2.css index.md -o index.html
pandoc -s --metadata pagetitle="GAP" -c GitHub2.css gap.md -o gap.html
#pandoc -s --metadata pagetitle="HIRSUTES 2023" -c GitHub2.css hirsutes2023.md -o hirsutes2023.html
pandoc -s --metadata pagetitle="GAP 2023 — Homotopy Algebras and Higher Structures" -c GitHub2.css gap2023.md -o gap2023.html
pandoc -s --metadata pagetitle="GAP 2023 — Schedule and Abstracts" -c GitHub2.css gap2023abstracts.md -o gap2023abstracts.html
pandoc -s --metadata pagetitle="Higher Structures in Enumerative Geometry" -c GitHub2.css june.md -o june.html
pandoc -s --metadata pagetitle="Dg-manifolds in Geometry and Physics" -c GitHub2.css july.md -o july.html
