## Set Webstorm environment 
1. Go to **Tools** -> **External Tools**.
2. Click the **+** button to add a new tool.
3. Set the name to `npx tsx`.
4. Configure the Tool Settings as follows:
    - **Program**: `npx`
    - **Arguments**: `tsx $FilePathRelativeToProjectRoot$`
    - **Working directory**: `$ProjectFileDir$`
