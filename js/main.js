// ============================================
// ALL PROMPTS - Clean version without imagePosition
// ============================================

const promptsData = [
    {
        id: 1,
        folder: "prompt-1",
        title: "The Illustrator's Sketchbook Page",
        category: "AI Art",
        tags: ["Sketchbook", "Hand-Drawn", "Character"],
        image: "laiqverse.jpg",
        prompt: `A spontaneous, chaotic, and densely packed sketchbook page, presented as if an illustrator has quickly sketched, doodled, and stacked multiple drawings at will. The entire composition is set against a clean, bright white textured paper background. The subject's exact facial identity, short dark hair, and full beard must be preserved across all sketches, maintaining perfect likeness and anatomical accuracy, especially on the close-ups.

Freely Distributed Sketches:
- Face Close-ups: Multiple expressive portraits capturing the subject's personality and subtle smile.
- Full-body drawings: Several figures showcasing the subject's specific style: V-neck black T-shirts, black or blue jeans, and heavy, rugged combat boots.
- Accessories: Beaded bracelets and a digital wrist watch visible on hands and wrists.
- Activity Sketches: Subject shown using MacBook Pro and iPad with Apple Pencil.
- Chibi/Deformed: Humorous 'chibi' versions scattered among realistic sketches.

Style: Free, stripped, raw black ink, pencil, and charcoal sketch lines. Loose, energetic, expressive lines with visible hatching and cross-hatching. NO organized character sheet, NO grid layout, NO clean digital lines.`
    },
    {
        id: 2,
        folder: "prompt-2",
        title: "The Atelier Hybrid Portrait",
        category: "AI Art",
        tags: ["Fashion", "Oil Painting", "Portrait"],
        image: "laiqverse.jpg",
        prompt: `Transform the uploaded portrait into a hybrid visual style combining contemporary fashion illustration, expressive atelier oil painting, and semi-abstract sketch aesthetics.

Identity & Fidelity: Preserve 100% of the subject's original facial identity, including hairstyle, skin tone, beard, mustache, glasses, hijab, makeup, age, gender expression, pose, body proportions, clothing silhouette, and all distinguishing features exactly as in the uploaded image.

Composition: Place the subject on a clean isolated background featuring subtle warm sepia canvas stains fading into untouched white negative space. The artwork should appear partially refined and partially deconstructed—highly accurate facial rendering emerging from layered gestural brushwork.

Artistic Technique: Integrate dynamic line variation: razor-sharp technical contours mixed with soft unfinished sketch marks, spontaneous ink streaks, rough charcoal lines, palette knife textures, dry-brush pigment buildup, semi-transparent washes, scraped paint surfaces, and overlapping expressive drafting strokes extending outward into empty space.

Atmosphere: Include subtle, illegible atelier construction marks and conceptual fashion-drawing textures. Strictly NO typography, letters, logos, watermarks, signatures, or readable text. Lighting should be soft and cinematic with subtle chiaroscuro transitions.`
    },
    {
        id: 3,
        folder: "prompt-3",
        title: "Refined Monochromatic Ink Profile",
        category: "AI Art",
        tags: ["Minimalist", "Ink", "Profile"],
        image: "laiqverse28.png",
        prompt: `A refined, museum-quality monochromatic ink portrait on a pristine, pure white textured fine art paper background. The composition features a clean, sharp side profile of the subject facing left, strictly preserving the exact facial identity, bone structure, proportions, and likeness from the uploaded reference image.

Artistic Execution: The portrait is rendered using deep charcoal-gray ink, expertly balanced to achieve subtle tonal variations that define the contours of the face and hair. The rendering blends precision portraiture with expressive, fluid art techniques: controlled ink splatter accents are visible, alongside delicate watercolor diffusion effects that give the shadows a soft, organic quality. The edges of the silhouette are not hard-lined; instead, they feature a faint, mist-like dispersion where the ink dissolves into the negative space, creating an ethereal and elegant fade.

Atmosphere: The lighting is soft and even, highlighting the texture of both the ink and the paper. The final image must feel contemporary yet timeless, emphasizing minimalist beauty and absolute subject accuracy through a sophisticated, hand-painted monochromatic medium.`
    },
    {
        id: 4,
        folder: "prompt-4",
        title: "Intaglio Financial Engraving Portrait",
        category: "AI Art",
        tags: ["Engraving", "Banknote", "Ultra-Detailed"],
        image: "malalalaiqverse.png",
        prompt: `An ultra-detailed, professional steel-plate and intaglio engraving of the subject, rendered as a vintage financial banknote portrait. Strictly preserve the exact facial identity, bone structure, ethnicity, gender, age, hairstyle, beard, mustache, glasses, and expression of the subject.

Technical Execution: The entire portrait is composed of monochrome, micro-fine black linework on a solid, pure white background (#FFFFFF). Depth and 3D volume are achieved exclusively through masterful line-weight variation:
- Facial Rendering: Smooth, concentric contour lines wrap around facial geometry to create realistic shading and depth transitions.
- Texture: Intricate cross-hatching and fine stippling define skin tones, while dense linework captures the textures of clothing, fabric folds, and accessories.
- Hair: Crisp, high-contrast black-and-white lines define individual locks and highlights, emphasizing flowing, sculptural form.

Lighting: The portrait features dramatic, high-contrast studio lighting, where light and shadow are defined entirely by the density and thickness of the engraving lines.

Watermark: Include a microscopic, ultra-thin, low-opacity sans-serif watermark reading 'LAIQVERSE' positioned cleanly in the bottom right corner.`
    },
    {
        id: 5,
        folder: "prompt-5",
        title: "The Monochromatic Blue Force Perspective",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "bhutto-laiqverse.jpg",
        prompt: `An ultra-realistic fashion editorial portrait (9:16 aspect ratio), captured with a low-angle 24mm lens. The image must strictly preserve the exact facial and physical identity of the subject from the reference photo, maintaining identical face structure, skin texture, beard pattern, glasses, hairstyle, and expression without any beautification or alteration.

Styling & Composition: The subject wears a sharply tailored, premium bright blue suit, paired with a crisp white shirt and a solid blue tie. They are seated confidently in a minimalist blue architectural chair.

Forced Perspective & Elements: The composition relies on an extreme forced-perspective illusion. A pair of oversized, chunky blue, white, and black designer performance sneakers dominates the extreme foreground, appearing disproportionately large.`
    },
    {
        id: 6,
        folder: "prompt-6",
        title: "The Urban Chronicle Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "malala-laiqverse.jpg",
        prompt: `A hyperrealistic, museum-grade portrait collage of the subject captured in a moment of intense emotion (screaming, eyes closed). The image must strictly preserve the exact facial identity, skin texture, and features from the uploaded reference photo.

Composition: The portrait is presented against a dynamic urban backdrop featuring abstract architectural elements, layered with subtle cultural references. The composition uses dramatic chiaroscuro lighting to emphasize the emotional intensity of the expression.

Style: Hyperrealistic with museum-grade finishing, combining editorial portrait techniques with fine art aesthetics. The image should feel both contemporary and timeless, capturing a moment of raw human emotion.`
    },
    {
        id: 7,
        folder: "prompt-7",
        title: "The Cinematic Hyper-Caricature",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "fazal-ur-rehman-laiqverse.jpg",
        prompt: `A premium, ultra-high-quality 3D cinematic hyper-caricature of the subject from the uploaded image. The image must strictly preserve 100% facial identity and recognizable features while applying a refined caricature aesthetic.

Styling: The subject is depicted holding an oversized chai ka cup (tea cup) as a central prop, emphasizing cultural authenticity. The caricature style uses subtle exaggeration of defining features while maintaining dignity and respect.

Execution: Professional 3D rendering with cinematic lighting, soft shadows, and premium texturing. The aesthetic balances hyper-realism with artistic interpretation, creating a unique portrait that celebrates identity with warmth and humor.`
    },
    {
        id: 8,
        folder: "prompt-8",
        title: "The Pen-and-Ink Editorial Caricature",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "bajwa-laiqverse.jpg",
        prompt: `A highly detailed, museum-quality black-and-white editorial caricature of the subject from the reference image, executed in the precise pen-and-ink art style.

Technique: The illustration uses expert cross-hatching, stippling, and varied line weights to create depth, texture, and three-dimensional form. The pen-and-ink technique emphasizes draftsmanship and traditional illustration craftsmanship.

Composition: The subject is presented as a bobblehead-style caricature with a slight exaggeration of head proportions while maintaining recognizable identity. The aesthetic combines editorial illustration with fine art printmaking traditions.`
    },
    {
        id: 9,
        folder: "prompt-9",
        title: "The Crimson Silhouette Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "fazal-ur-rehman-laiqverse.jpg",
        prompt: `An ultra-realistic, cinematic close-up portrait (9:16 aspect ratio) of the subject from the reference photo. The image must strictly preserve 100% facial identity, skin texture, and features.

Lighting & Mood: Dramatic cinematic lighting with a deep crimson/monochromatic color scheme. The lighting emphasizes facial contours, creating a powerful and emotive portrait that feels both intimate and monumental.

Execution: Museum-quality finishing with subtle texture, premium grading, and professional editorial aesthetics. The portrait should feel like a frame from a prestige cinema production or a high-end fashion editorial.`
    },
    {
        id: 10,
        folder: "prompt-10",
        title: "The Acoustic Sepia Caricature",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "salma-hayek1-laiqverse.jpg",
        prompt: `A highly detailed digital caricature illustration of the subject from the reference image, transforming her into a stylized caricature while strictly preserving facial identity and recognizable features.

Concept: The subject is depicted playing an acoustic guitar, adding a musical and artistic dimension to the portrait. The caricature style uses warm sepia tones, creating a nostalgic and artistic atmosphere.

Execution: The illustration combines traditional caricature techniques with digital refinement. The warm sepia palette adds depth and emotional resonance, while the guitar prop creates narrative interest.`
    },
    {
        id: 11,
        folder: "prompt-11",
        title: "The Vibrant Editorial Caricature",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "benazir-laiqverse.jpg",
        prompt: `A premium 3D digital caricature and editorial illustration of the subject, captured mid-laugh with a vibrant, expressive personality. The image must unmistakably preserve the identity while applying a stylized caricature aesthetic.

Style: The caricature combines 3D rendering with editorial illustration techniques. The expression captures a moment of genuine laughter and joy, adding warmth and humanity to the stylized portrait.

Execution: Premium digital craftsmanship with vibrant colors, professional lighting, and refined texturing. The aesthetic balances artistic interpretation with recognizable identity, creating a memorable and engaging portrait.`
    },
    {
        id: 12,
        folder: "prompt-12",
        title: "The Modern Geometric Editorial Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "irrfan-khan-laiq-verse.jpg",
        prompt: `A sophisticated modern geometric editorial portrait (vertical 4:5 aspect ratio) presented as a close-up bust portrait from a slightly low angle, where the subject's face is deconstructed into a refined composition of geometric shapes, angular planes, and faceted forms.

Style: The aesthetic merges cubist influences with contemporary editorial photography. The geometric deconstruction creates a unique visual language while preserving recognizable identity and features.

Execution: Premium digital craftsmanship with refined color grading, subtle textures, and professional editorial finishing. The portrait feels both modern and timeless.`
    },
    {
        id: 13,
        folder: "prompt-13",
        title: "The Alpenglow Reflection Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "shah-rukh-khan-laiqverse.jpg",
        prompt: `A museum-grade luxury sports editorial portrait featuring the subject exactly as he appears in the reference photo. The image must strictly preserve 100% facial identity, features, and expression.

Composition: The subject is depicted as a luxury athletic creator in a cinematic Swiss Alps setting. The composition uses forced perspective with oversized elements and dramatic alpenglow lighting.

Execution: Ultra-premium editorial photography with cinematic lighting, professional grading, and museum-quality finishing. The portrait feels aspirational and luxurious.`
    },
    {
        id: 14,
        folder: "prompt-14",
        title: "The Cue Master's Focus",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "fazal-ur-rahman-laiqverse.jpg",
        prompt: `A cinematic, ultra-realistic close-up photograph of a man taking a precise billiards shot. The image must strictly use the uploaded photo as an exact reference for the subject's identity and features.

Composition: The subject is captured in a moment of intense concentration, taking a billiards shot. The composition emphasizes precision, focus, and strategic thinking.

Execution: Cinematic lighting with shallow depth of field, premium color grading, and professional editorial finishing. The image feels like a frame from a high-production-value film.`
    },
    {
        id: 15,
        folder: "prompt-15",
        title: "The Melancholic City Night",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "shah-rukh-khan-laiqverse.jpg",
        prompt: `A low-angle, cinematic close-up shot captured looking through a rain-slicked car window during a heavy rainstorm. The image must incorporate the exact facial identity and features of the subject from the reference photo.

Composition: The subject is seen through a car window with rain droplets and neon city lights creating a melancholic, atmospheric mood. The rain and reflections add depth and emotional resonance.

Execution: Cinematic photography with dramatic lighting, rain effects, and neon color grading. The aesthetic feels like a frame from an arthouse film.`
    },
    {
        id: 16,
        folder: "prompt-16",
        title: "The Neo-Baroque Engraving Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "laiq-qureshi.jpg",
        prompt: `A masterful, symmetrical close-up portrait of Laiq Ahmed Qureshi, executed in a hybrid vintage engraving and ornate woodcut illustration style. The image must strictly adhere to the reference photo, preserving 100% identity accuracy—including bone structure, facial features, hairstyle, and distinctive characteristics—without beautification or alteration. Stylistic Execution The portrait is defined by elaborate, intricate linework and detailed cross-hatching that defines the subject's anatomy and form. The linocut detailing is so dense it mimics the textures of hair and clothing. The subject's figure is seamlessly blended with surrounding elaborate filigree, baroque scrollwork, and stylized swirling patterns that form a cohesive, decorative tapestry integrated into the portrait itself. Lighting &amp; Color Palette The artwork features dramatic chiaroscuro lighting, creating a stark, high-contrast graphic poster aesthetic. The background is a deep, moody teal and muted turquoise, overlaid with a subtle damask pattern. The main subject is rendered in monochromatic cream, off-white, and charcoal black linework. This is punctuated by a vibrant, high-saturation pop of orange-red applied to a single prominent accessory (e.g., a lapel pin or scarf detail). Composition &amp; Atmosphere The composition is a tight, symmetrical portrait with bold, vector-like outlines. The mood is cool, edgy, retro-modern, and stylishly surreal, presenting Laiq Ahmed Qureshi as a central figure within a sophisticated, hand-carved printmaking masterpiece. The final render is clean-edged, ultra-detailed, and commands attention as a premium gallery asset.`
    },
    {
        id: 17,
        folder: "prompt-17",
        title: "The Intellectual Sketchbook Caricature",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "laiq-qureshi.jpg",
        prompt: `A highly detailed, museum-grade hand-drawn caricature portrait rendered in a premium sketchbook illustration style. The image must strictly use the uploaded photo as the identity anchor, ensuring 100% likeness accuracy regarding facial structure, hairline, skin tone, and distinctive features, while artistically exaggerating the subject's proportions for caricature impact. Artistic Execution Exaggerate distinctive features with an oversized head, elongated neck, enlarged black thick-rimmed eyeglasses, and slightly oversized ears. The subject's expression is mildly skeptical and intellectual, characterized by a dry sense of humor, a subtle side-eye, and one slightly raised eyebrow. The piece is an ultra-detailed pen-and-ink drawing blended with watercolor washes. Incorporate fine cross-hatching, scribbled sketch lines, and visible construction marks to maintain an authentic 'artist notebook' aesthetic. Hair is rendered with loose, expressive, and messy flyaway strokes; the clothing is a simple dark crew-neck shirt depicted with relaxed, confident sketchwork. Palette &amp; Texture The background is an aged sketchbook page featuring subtle coffee stains, ink splatters, and watercolor blotches on textured, organic paper. The palette is warm and muted, consisting of paper tones, watercolor browns, sepia inks, and subtle skin hues. Final Finish The result is an illustrator-portfolio-quality piece that feels intelligent, quirky, and eccentric. Absolutely NO cartoon animation style, NO plastic rendering, NO digital smoothness, and NO 3D CGI appearance. The final output is an 8K, 4:5 portrait suitable for a professional editorial magazine feature.`
    },
    {
        id: 18,
        folder: "prompt-18",
        title: "The Refined Charcoal Profile",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "pope-laiqverse.jpg",
        prompt: `A refined, monochromatic fine-art ink portrait of the subject, meticulously rendered as a clean, sharp side profile facing left. The image must strictly preserve the exact facial identity, bone structure, proportions, and distinct characteristics of the subject from the reference photo, ensuring 100% likeness accuracy without any alteration. Artistic Execution The portrait is executed in soft, deep charcoal-gray ink on a stark, pure white (#FFFFFF) background. The rendering relies on subtle tonal variations achieved through controlled ink density rather than hard lines. The edges of the silhouette are not uniform; they feature delicate, faint mist-like dispersion and feathering, giving the portrait an ethereal quality. Texture &amp; Atmosphere The artwork incorporates organic, controlled splatter accents and subtle watercolor diffusion effects within the portrait itself, adding depth and a handcrafted feel. The composition is minimalist and clean, focusing entirely on the profile against the negative space. Absolutely NO text, NO watermarks, NO signatures, and NO typography are present. Final Finish The lighting is soft and even, highlighting the subtle texture of the charcoal on paper. The piece is a premium, gallery-quality asset that embodies elegance, artistic restraint, and sophisticated craftsmanship.`
    },
    {
        id: 19,
        folder: "prompt-19",
        title: "LaiqVerse Prompt Studio",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "laiqqureshi.jpg",
        prompt: `Prompt text not found`
    },
    {
        id: 20,
        folder: "prompt-20",
        title: "Dimensional Papercraft Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "asim-munir-laiqverse.jpg",
        prompt: `A sophisticated, layered papercraft portrait meticulously constructed from folded geometric paper pieces. The image must strictly preserve the facial identity and proportions of the subject from the reference photo, ensuring 100% likeness accuracy while rendering the face in a precise, low-poly structure. Artistic Execution The portrait is a physical-style study where each facial plane is represented by distinct paper layers. Use realistic paper texture—complete with subtle fibers and weight—to create a handcrafted origami aesthetic. Soft, natural light cascades across the folds, generating gentle, realistic drop shadows that define the depth and three-dimensional volume of the face. Composition &amp; Detail The composition is clean and minimalist, set against a subtle, textured off-white background that allows the papercraft elements to stand out. Every feature, from the eye sockets and nose bridge to the jawline and hair, is simplified into geometric facets that remain instantly recognizable and true to the source image. Final Finish The result is a highly detailed, gallery-quality asset. The lighting should feel soft and studio-grade, emphasizing the material quality of the paper. Absolutely NO smooth or digital skin effects; every surface must retain the distinct, crisp edges and tangible depth of professional paper-cutting art.`
    },
    {
        id: 21,
        folder: "prompt-21",
        title: "Macro Scratchboard Vision",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "laiqqureshi-engraved.jpg",
        prompt: `An extreme close-up, macro-level portrait rendered in a highly detailed and intricate colored scratchboard art style. The image must use the reference as the sole facial guide, preserving 100% identity accuracy—including bone structure, skin tone, hairstyle, and unique features—within the demanding technical constraints of the medium. Artistic Execution The entire portrait is constructed from thousands of precise, colored lines etched onto a solid black field. There are no brushstrokes or soft gradients; instead, the shape of the skin pores, facial features, hair, and beard is defined entirely through complex, intersecting, and concentric linework. The stroke rhythm follows the underlying anatomy, with varying line density creating depth, shadow, and skin texture transitions. Lighting &amp; Focus The focus is sharply directed on the eyes, which are rendered with intense, vivid colors that capture and reflect light, providing a brilliant focal point against the dark, etched background. The portrait is presented in a dramatic partial profile, emphasizing the sculptural quality of the face. Atmosphere The result is a technical masterpiece of line-based portraiture. The aesthetic is sharp, tactile, and highly disciplined, capturing a sense of profound introspection. The vibrant colors of the lines contrast beautifully against the deep, velvet-black field, creating a luminous, high-contrast effect that feels both modern and classically precise.`
    },
    {
        id: 22,
        folder: "prompt-22",
        title: "The Visionary Ink Study",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "humera-khan-laiqverse.jpg",
        prompt: `A museum-grade, high-contrast close-up portrait (mid-neck upward framing) rendered as an expressive ink-wash masterpiece on textured, off-white fine-art paper. The image must use the reference as the sole facial guide, preserving 100% identity accuracy—including bone structure, skin tone, hairstyle, and unique features—without any beautification or alteration. Pose &amp; Composition The subject is posed in a three-quarter profile, body angled right, with the chin gently raised in a powerful, visionary stance. The gaze is soft and distant, directed slightly above the horizon. The subject occupies 65–70% of the frame, surrounded by intentional negative space, with a large, soft circular ink wash creating a diffused, organic halo behind the head. The camera uses a subtle low-angle perspective to convey grandeur and presence. Style &amp; Texture The subject wears a structured dark leather tactical-style jacket with detailed metallic zippers and subtle gold accents near the collar. The rendering style avoids smooth digital gradients, favoring authentic ink-density variation. Use fine-line facial detailing for the eyes, brows, and lips, transitioning into bold, expressive brushstrokes for the hair and clothing. Incorporate organic watercolor bleeds, ink diffusion, and dry-brush textures throughout. Lighting &amp; Palette Dramatic lighting originates from the upper-left, carving out highlights on the forehead, nose bridge, cheekbones, and lips, while deep, dense ink shadows define the jawline and neck. The palette is strictly monochromatic black with subtle, aged sepia undertones. The background features natural paper grain, complemented by organic ink splashes, droplets, and energetic flicked brush marks. Final Finish The result is a clean-edged, ultra-detailed 8K vertical composition (4:5 aspect ratio) that celebrates natural ink imperfections. Absolutely NO plastic skin effects, NO artificial blurring, and NO digital smoothness.`
    },

    {
        id: 23,
        folder: "prompt-23",
        title: "The LaiqVerse Kinetic Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "laiqqureshi-kinetic.jpg",
        prompt: `An ultra-hyper-realistic, high-definition caricature-style portrait meticulously crafted to honor the facial structure and distinct identity of Laiq Ahmed Qureshi. The portrait captures an intensely maniacal expression of shocked euphoria—eyes wide and bulging, mouth agape in a vibrant, screaming smile that reveals clear dental and gum detail, with the head tilted in dynamic motion. Artistic Execution The artwork is defined by extreme textural depth, utilizing thick, coarse impasto oil paint. Every pore, wrinkle, and skin fold of the subject is rendered with hyper-real detail, captured through visible, directional brushstrokes. The subject is depicted with his signature spiky, untamed hair, textured facial hair, and the iconic distressed blue jacket. Lighting &amp; Palette The composition uses a limited, expressive palette: rich blues, creamy highlights, gold-toned skin undertones, and striking purple accents. Dramatic, directional lighting creates deep, cavernous shadows within the folds of the skin and the open mouth, emphasizing the high-voltage energy of the character. Atmosphere The background features raw, visible canvas textures accented by spontaneous, artistic stray scribbles. This render is a hyper-detailed oil painting on canvas—a sophisticated, modern piece that visually represents the innovative digital frontier of AI in Pakistan within the broader #LaiqVerse creative ecosystem.`
    },

    {
        id: 24,
        folder: "prompt-24",
        title: "Maniacal Impasto Expressionist Portrait",
        category: "AI Art",
        tags: ["Gemini Omni", "Laiq Ahmed Qureshi", "DeepSeek", "LaiqVerse", "Pakistan"],
        image: "fazal-ur-rehman-laiqverse.jpg",
        prompt: `An ultra-hyper-realistic, high-definition caricature portrait that serves as a visceral study of intense human emotion. Strictly adhere to the subject's exact facial structure, bone proportions, and identity from the reference image, while amplifying their expression into a state of shocked euphoria—eyes wide and bulging, mouth agape in an intense, screaming smile that clearly defines the gums and teeth, with the head tilted dynamically. Artistic Execution The artwork is defined by extreme textural quality, utilizing thick, coarse impasto oil paint. Every pore, skin fold, and wrinkle is rendered with hyper-detailed realism, yet embedded within visible, directional brushstrokes that reveal the raw canvas texture beneath. The subject's hair is styled in a spiky, untamed, and highly textured manner, paired with their specific facial hair (or lack thereof) to ensure complete identity preservation. The subject wears the recognizable distressed blue jacket from the reference. Lighting &amp; Palette Utilize a limited, expressive color palette of deep blues, creamy highlights, gold-toned skin undertones, and rich purple accents. Lighting is aggressively dramatic and directional, casting deep, cavernous shadows within the open mouth and across the folds of the skin to emphasize the manic, high-voltage energy of the moment. Atmosphere The background features raw canvas textures layered with spontaneous, artistic stray scribbles. The final render is a masterpiece of modern expressionism—hyper-detailed, tactile, and overflowing with visceral, insane energy.`
    }
]

// ============================================
// RENDER PROMPTS
// ============================================

function renderPrompts() {
    const container = document.getElementById('promptGrid');
    if (!container) return;

    let html = '';
    
    promptsData.forEach((prompt) => {
        const imagePath = `${prompt.folder}/${prompt.image}`;
        const shortPrompt = prompt.prompt.length > 150 
            ? prompt.prompt.substring(0, 150) + '...' 
            : prompt.prompt;
        
        html += `
            <div class="prompt-card" data-prompt="${encodeURIComponent(prompt.prompt)}">
                <div class="prompt-card-image">
                    <img src="${imagePath}" 
                         alt="${prompt.title}" 
                         onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect width=%22300%22 height=%22200%22 fill=%22%23e8e8ed%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22system-ui%22 fill=%22%23999%22%3ENo Image%3C/text%3E%3C/svg%3E'"
                         loading="lazy" />
                </div>
                <div class="prompt-card-body">
                    <span class="category">${prompt.category}</span>
                    <h3>${prompt.title}</h3>
                    <p class="prompt-text">${shortPrompt}</p>
                    <div class="tags">
                        ${prompt.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.prompt-card').forEach(card => {
        card.addEventListener('click', function() {
            const promptText = decodeURIComponent(this.dataset.prompt);
            copyPrompt(promptText);
        });
    });
}

// ============================================
// COPY FUNCTION
// ============================================

function copyPrompt(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('✨ Prompt copied to clipboard!');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast('✨ Prompt copied to clipboard!');
    } catch (e) {
        showToast('📋 Please copy manually');
    }
    document.body.removeChild(textarea);
}

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0,0,0,0.85)',
        color: 'white',
        padding: '14px 32px',
        borderRadius: '100px',
        fontFamily: '-apple-system, sans-serif',
        fontSize: '0.95rem',
        fontWeight: '500',
        backdropFilter: 'blur(10px)',
        zIndex: '999',
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        opacity: '0',
        transition: 'opacity 0.3s ease'
    });
    document.body.appendChild(toast);
    
    setTimeout(() => toast.style.opacity = '1', 10);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 LaiqVerseStudioAI loaded with all 15 prompts!');
    renderPrompts();
});
