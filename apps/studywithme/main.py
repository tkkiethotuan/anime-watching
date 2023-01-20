import tkinter
import webview
from tkinter import *
from tkinter.ttk import *

# function
def start_app():
    webview.create_window(url="https://studywithme.glitch.me", title="Study With Me by Ho Tuan Kiet", width=1200, height=1000)
    webview.start()

root = Tk()
root.title("Study With Me by Ho Tuan Kiet")
root.geometry("1200x1000")

lbl_name = Label(root, text="Study With Me", font=("Arial", 30))
lbl_name.pack()

lbl_you_must_be_online_to_use_app = Label(root, text="You must be online to use this app", font=("Arial", 25))
lbl_you_must_be_online_to_use_app.pack()

button_start_app = Button(root, text="Start App", command=start_app)
button_start_app.pack()

root.mainloop()