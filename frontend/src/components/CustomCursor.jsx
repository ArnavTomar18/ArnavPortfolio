import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const followerX = useRef(0)
  const followerY = useRef(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const supportsHover = window.matchMedia("(hover: hover)").matches
    const isDesktop = window.innerWidth > 768

    if (!supportsHover || !isDesktop) {
      cursor.style.display = "none"
      follower.style.display = "none"
      return
    }

    cursor.style.opacity = "1"
    follower.style.opacity = "1"

    const onMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    document.addEventListener("mousemove", onMove)

    let rafId

    const animate = () => {
      followerX.current += (mouseX.current - followerX.current) * 0.12
      followerY.current += (mouseY.current - followerY.current) * 0.12

      follower.style.left = followerX.current + "px"
      follower.style.top = followerY.current + "px"

      rafId = requestAnimationFrame(animate)
    }

    animate()

    const addHover = (e) => {
      if (
        e.target.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-hover]"
        )
      ) {
        cursor.classList.add("hover")
        follower.classList.add("hover")
      }
    }

    const removeHover = (e) => {
      if (
        e.target.closest(
          "a, button, input, textarea, select, label, [role='button'], [data-hover]"
        )
      ) {
        cursor.classList.remove("hover")
        follower.classList.remove("hover")
      }
    }

    document.addEventListener("mouseover", addHover)
    document.addEventListener("mouseout", removeHover)

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0"
      follower.style.opacity = "0"
    })

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1"
      follower.style.opacity = "1"
    })

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseover", addHover)
      document.removeEventListener("mouseout", removeHover)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>
    </>
  )
}