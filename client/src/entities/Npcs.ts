import { Color } from '../board/map/tiles/Color'

export const Npcs = {
    Dog: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [Color.Brown, 0, 0, 0, 0, Color.Brown, 0, Color.Brown],
        [Color.Brown, 0, 0, 0, 0, Color.Brown, Color.Brown, Color.Brown],
        [0, Color.Brown, Color.Brown, Color.Brown, Color.Brown, Color.Brown, Color.Brown, Color.Brown],
        [0, Color.Brown, Color.Brown, Color.Brown, Color.Brown, Color.Brown, 0, 0],
        [0, Color.Brown, 0, 0, 0, Color.Brown, 0, 0],
        [0, Color.Brown, 0, 0, 0, Color.Brown, 0, 0],
    ],
    Spider: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, 0, 0],
        [0, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, 0],
        [0, Color.DarkGrey, Color.DarkPurple, Color.DarkGrey, Color.DarkGrey, Color.DarkPurple, Color.DarkGrey, 0],
        [Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey, Color.DarkGrey],
        [Color.DarkGrey, 0, Color.DarkGrey, 0, 0, Color.DarkGrey, 0, Color.DarkGrey],
        [Color.DarkGrey, 0, Color.DarkGrey, 0, 0, Color.DarkGrey, 0, Color.DarkGrey],
    ],
    Zero: [[0               ,0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ,0               ],
	[0               ,0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,Color.DarkGrey  ,0               ,0               ],
	[0               ,0               ,Color.DarkGrey  ,0               ,0               ,Color.DarkGrey  ,0               ,0               ],],
} as any
