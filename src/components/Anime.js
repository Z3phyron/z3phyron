export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 1.2,
            when: "beforeChildren"
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.75,
            delay: 0.5,
            staggerChildren: 0.5
        }
    } 
}





export const hello = {
    hidden: {
        opacity: 0,
        x: -300,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            delay: 0.1,
            staggerChildren: 1.2,
            when: "afterChildren"
        }
    },
    exit: {
        opacity: 0,
        x: -300,
        transition: {
            duration: 0.3,
            delay: 0.1,
            staggerChildren: 0.5
        }
    } 
}

export const name = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              delay: 0.55,
              staggerChildren: 1.2,
              when: "afterChildren",
            },
          },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
      delay: 0.55,
      staggerChildren: 0.5,
    },
  },
};

export const prof = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.3,
      staggerChildren: 1.2,
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
      delay: 1.3,
      staggerChildren: 0.5,
    },
  },
};

export const home_desc = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.8,
      staggerChildren: 1.2,
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
      delay: 1.8,
      staggerChildren: 0.5,
    },
  },
};

export const home_btn = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 1.8,
      staggerChildren: 1.2,
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.3,
      delay: 1.8,
      staggerChildren: 0.5,
    },
  },
};








export const title = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            
            staggerChildren: 1.2,
            when: "afterChildren"
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.3,
            
            staggerChildren: 0.5
        }
    } 
}

