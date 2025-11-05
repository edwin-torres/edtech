import { useState } from "react";
import { Card, Button, LinearProgress, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import { frontsPortfolio, backsPortfolio } from "../../assets/images"; // ✅ import from index.js

function SwipeFlipCard({ imageFront, imageBack, onRemove, onDirection }) {
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(null);
  const [removed, setRemoved] = useState(false);

  return (
    !removed && (
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            setDirection("right");
            setTimeout(() => {
              setRemoved(true);
              onDirection?.("right");
              onRemove?.();
            }, 800);
          } else if (info.offset.x < -100) {
            setDirection("left");
            setTimeout(() => {
              setRemoved(true);
              onDirection?.("left");
              onRemove?.();
            }, 800);
          } else {
            setDirection(null);
          }
        }}
        animate={{
          rotateY: flipped ? 180 : 0,
          x:
            direction === "right"
              ? 400
              : direction === "left"
              ? -400
              : 0,
          rotate: direction
            ? direction === "right"
              ? 20
              : -20
            : 0,
          opacity: direction ? 0 : 1,
          scale: flipped ? 1.02 : 1,
        }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: direction ? 0.8 : 0.4,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          transformStyle: "preserve-3d",
          cursor: "grab",
        }}
        onClick={() => setFlipped(f => !f)}
      >
        {/* FRONT */}
        <Card
          elevation={6}
          style={{
       position: "absolute",
    inset: 0,
    borderRadius: 16,
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
          }}
        >
          {imageFront && (
            <img
              src={imageFront}
              alt="front"
              style={{
              width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: 16,
        pointerEvents: "none",
        userSelect: "none",
        imageRendering: "auto", // ✅ default, best on high-DPI
        transform: "none",      // ✅ no GPU raster layer   // ✅ keeps image crisp
         
              }}
            />
          )}
        </Card>

        {/* BACK */}
        <Card
          elevation={6}
          style={{
          position: "absolute",
    inset: 0,
    borderRadius: 16,
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
          }}
        >
          {imageBack && (
            <img
              src={imageBack}
              alt="back"
              style={{
             width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: 16,
        pointerEvents: "none",
        userSelect: "none",
        imageRendering: "auto",
        transform: "none",
        
              }}
            />
          )}
        </Card>

        {/* ✅ / ❌ Overlays */}
        <motion.div
          animate={{
            opacity: direction === "right" ? 1 : 0,
            scale: direction === "right" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            color: "green",
            fontSize: "3rem",
            pointerEvents: "none",
          }}
        >
          ✅
        </motion.div>

        <motion.div
          animate={{
            opacity: direction === "left" ? 1 : 0,
            scale: direction === "left" ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translate: "-50% -50%",
            color: "red",
            fontSize: "3rem",
            pointerEvents: "none",
          }}
        >
          ❌
        </motion.div>
      </motion.div>
    )
  );
}

export default function PortfolioCards() {
  // ✅ now pulls from index.js
  const initialCards = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    imageFront: frontsPortfolio[`quadFront2_${i + 1}`],
    imageBack: backsPortfolio[`quadBack2_${i + 1}`],
  }));

  const totalCards = initialCards.length;
  const [cards, setCards] = useState(initialCards);
  const [missed, setMissed] = useState([]);

  const removeTopCard = () => setCards(c => c.slice(1));

  const handleDirection = direction => {
    if (direction === "left" && cards.length > 0) {
      setMissed(m => [...m, cards[0]]);
    }
  };

  const restartDeck = () => {
    setMissed([]);
    setCards(initialCards);
  };

  const reviewMissed = () => {
    setCards(missed);
    setMissed([]);
  };

  const progress = ((totalCards - cards.length) / totalCards) * 100;
  const currentCardNumber = totalCards - cards.length + 1;

  return (
    <div
      style={{
        width: 400,
        margin: "25px auto",
        perspective: "1000px",
        textAlign: "center",
        background: "#F9FAFB",
        paddingBottom: 38,
        paddingRight:22,
        paddingLeft:22,
        borderRadius: 12,
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
  variant="body2"
  sx={{
    mb: 3,
    color: "text.secondary",
    background: "#F9FAFB",
    borderRadius: 2,
    p: 1.5,
    fontStyle: "italic",
    textAlign:"left"
  }}
>
  • Tap to flip the card 🔄 <br></br>• Swipe right if you know it ✅ <br></br> • Swipe left if you need to review ❌
</Typography>

      {/* Progress Section */}
      <div style={{ marginBottom: 12 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: "#E0E0E0",
            "& .MuiLinearProgress-bar": { backgroundColor: "#1976d2" },
          }}
        />
        <Typography
          variant="body2"
          sx={{
            mt: 0.5,
            color: "#333",
            fontWeight: 500,
          }}
        >
          {cards.length > 0
            ? `Card ${currentCardNumber} of ${totalCards}`
            : "All cards reviewed!"}
        </Typography>
      </div>

      {/* Card Stack Container */}
      <div
        style={{
          width: 410,
          height: 335,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {cards.length > 0 ? (
          cards
            .slice(0, 2)
            .reverse()
            .map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ scale: i === 0 ? 0.95 : 1, y: i === 0 ? 15 : 0 }}
                animate={{ scale: i === 0 ? 0.95 : 1, y: i === 0 ? 15 : 0 }}
                style={{ position: "absolute", inset: 0 }}
              >
                <SwipeFlipCard
                  imageFront={card.imageFront}
                  imageBack={card.imageBack}
                  onRemove={removeTopCard}
                  onDirection={handleDirection}
                />
              </motion.div>
            ))
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              background: "#E3F2FD",
              borderRadius: 16,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              padding: 16,
            }}
          >
            <h3 style={{ color: "#0D47A1" }}>🎉 Stack Done!</h3>
            <p style={{ color: "#333" }}>
              You’ve reviewed all quadratic concepts!
            </p>

            {missed.length > 0 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={reviewMissed}
                sx={{ mb: 1, borderRadius: 2 }}
              >
                Review Missed ({missed.length})
              </Button>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={restartDeck}
              sx={{ borderRadius: 2 }}
            >
              Review All 🔁
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
